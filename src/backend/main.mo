import Array "mo:core/Array";
import COrder "mo:core/Order";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Text "mo:core/Text";

actor {
  type ProductId = Nat;
  type PostId = Nat;
  type OrderId = Nat;

  type Product = {
    id : ProductId;
    name : Text;
    description : Text;
    category : Text; // "damas-elegantes", "damas-casuales", etc.
    priceUSD : Float;
    imageUrl : Text;
    available : Bool;
    sizes : [Text];
  };

  module Product {
    public func compare(p1 : Product, p2 : Product) : COrder.Order {
      Nat.compare(p1.id, p2.id);
    };

    public func compareByPrice(p1 : Product, p2 : Product) : COrder.Order {
      if (p1.priceUSD < p2.priceUSD) { #less } else if (p1.priceUSD > p2.priceUSD) { #greater } else {
        #equal;
      };
    };
  };

  type BlogPost = {
    id : PostId;
    title : Text;
    content : Text;
    date : Time.Time;
    imageUrl : Text;
  };

  module BlogPost {
    public func compare(b1 : BlogPost, b2 : BlogPost) : COrder.Order {
      Nat.compare(b1.id, b2.id);
    };

    public func compareByDate(b1 : BlogPost, b2 : BlogPost) : COrder.Order {
      Int.compare(b2.date, b1.date);
    };
  };

  type CartItem = {
    productId : ProductId;
    quantity : Nat;
    size : Text;
  };

  type Order = {
    id : OrderId;
    items : [CartItem];
    customerName : Text;
    customerPhone : Text;
    totalUSD : Float;
    status : Text; // "pending", "completed", etc.
    createdAt : Time.Time;
  };

  module Order {
    public func compare(o1 : Order, o2 : Order) : COrder.Order {
      Nat.compare(o1.id, o2.id);
    };
  };

  let products = Map.empty<ProductId, Product>();
  var nextProductId = 0;

  let blogPosts = Map.empty<PostId, BlogPost>();
  var nextPostId = 0;

  let orders = Map.empty<OrderId, Order>();
  var nextOrderId = 0;

  var bcvRate : Float = 0.0;

  public type ProductInput = {
    name : Text;
    description : Text;
    category : Text;
    priceUSD : Float;
    imageUrl : Text;
    available : Bool;
    sizes : [Text];
  };

  public type ProductUpdate = {
    name : Text;
    description : Text;
    category : Text;
    priceUSD : Float;
    imageUrl : Text;
    available : Bool;
    sizes : [Text];
  };

  public type BlogPostInput = {
    title : Text;
    content : Text;
    imageUrl : Text;
  };

  public type OrderInput = {
    items : [CartItem];
    customerName : Text;
    customerPhone : Text;
    totalUSD : Float;
  };

  public shared ({ caller }) func createProduct(input : ProductInput) : async ProductId {
    let id = nextProductId;
    let product : Product = {
      input with
      id;
    };
    products.add(id, product);
    nextProductId += 1;
    id;
  };

  public shared ({ caller }) func updateProduct(id : ProductId, input : ProductUpdate) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) {
        let updatedProduct : Product = {
          input with
          id;
        };
        products.add(id, updatedProduct);
        updatedProduct;
      };
    };
  };

  public shared ({ caller }) func deleteProduct(id : ProductId) : async () {
    if (not products.containsKey(id)) { Runtime.trap("Product not found") };
    products.remove(id);
  };

  public query ({ caller }) func getProduct(id : ProductId) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    let filtered = List.empty<Product>();
    for (product in products.values()) {
      if (product.category == category) {
        filtered.add(product);
      };
    };
    filtered.toArray().sort();
  };

  public query ({ caller }) func getAvailableProducts() : async [Product] {
    let filtered = List.empty<Product>();
    for (product in products.values()) {
      if (product.available) {
        filtered.add(product);
      };
    };
    filtered.toArray().sort();
  };

  public query ({ caller }) func getProductsByPrice() : async [Product] {
    products.values().toArray().sort(Product.compareByPrice);
  };

  public shared ({ caller }) func createBlogPost(input : BlogPostInput) : async PostId {
    let id = nextPostId;
    let post : BlogPost = {
      id;
      title = input.title;
      content = input.content;
      date = Time.now();
      imageUrl = input.imageUrl;
    };
    blogPosts.add(id, post);
    nextPostId += 1;
    id;
  };

  public shared ({ caller }) func updateBlogPost(id : PostId, input : BlogPostInput) : async BlogPost {
    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("Blog post not found") };
      case (?post) {
        let updatedPost : BlogPost = {
          id;
          title = input.title;
          content = input.content;
          date = Time.now();
          imageUrl = input.imageUrl;
        };
        blogPosts.add(id, updatedPost);
        updatedPost;
      };
    };
  };

  public shared ({ caller }) func deleteBlogPost(id : PostId) : async () {
    if (not blogPosts.containsKey(id)) { Runtime.trap("Blog post not found") };
    blogPosts.remove(id);
  };

  public query ({ caller }) func getBlogPost(id : PostId) : async BlogPost {
    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("Blog post not found") };
      case (?post) { post };
    };
  };

  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort();
  };

  public query ({ caller }) func getBlogPostsByDate() : async [BlogPost] {
    blogPosts.values().toArray().sort(BlogPost.compareByDate);
  };

  public shared ({ caller }) func createOrder(input : OrderInput) : async OrderId {
    let id = nextOrderId;
    let order : Order = {
      id;
      items = input.items;
      customerName = input.customerName;
      customerPhone = input.customerPhone;
      totalUSD = input.totalUSD;
      status = "pending";
      createdAt = Time.now();
    };
    orders.add(id, order);
    nextOrderId += 1;
    id;
  };

  public shared ({ caller }) func updateOrderStatus(id : OrderId, status : Text) : async Order {
    switch (orders.get(id)) {
      case (null) { Runtime.trap("Order not found") };
      case (?order) {
        let updatedOrder : Order = {
          order with
          status;
        };
        orders.add(id, updatedOrder);
        updatedOrder;
      };
    };
  };

  public query ({ caller }) func getOrder(id : OrderId) : async Order {
    switch (orders.get(id)) {
      case (null) { Runtime.trap("Order not found") };
      case (?order) { order };
    };
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    orders.values().toArray().sort();
  };

  public shared ({ caller }) func setBCVRate(rate : Float) : async () {
    bcvRate := rate;
  };

  public query ({ caller }) func getBCVRate() : async Float {
    bcvRate;
  };
};

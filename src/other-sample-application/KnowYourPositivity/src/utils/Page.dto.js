class Page {
  constructor(name = "Name Missing!!", link = "", children = []) {
    this.name = name;
    this.link = link;
    this.children = Array.isArray(children)
      ? children.map((child) => (child instanceof Page ? child : Page.fromData(child)))
      : [];
  }

  static fromData({ name = "Name Missing!!", link = "", children = [] } = {}) {
    return new Page(name, link, children);
  }
}

export default Page;

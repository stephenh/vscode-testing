
import Bar from "bar/Bar";
import BarNew from "bar/BarNew";

class Foo {
  foo() {
    var b = new Bar();
    var b2 = new BarNew();
    return b.bar();
  }
}

export default Foo;

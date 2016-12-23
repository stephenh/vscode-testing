
import Bar from "bar/Bar";
import BarNew from "bar/FooNew";

class FooNew {
  foo() {
    var b = new Bar();
    var b2 = new BarNew();
    return b.bar();
  }
}

export default FooNew;

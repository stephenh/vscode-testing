
import Bar from "Bar";
import Bar2 from "Bar2";
import Zaz from "sub/Zaz";

class Foo {
  foo() {
    var b = new Bar();
    b.bar();

    var z = new Zaz();
    z.zaz();
  }
}

export default Foo;


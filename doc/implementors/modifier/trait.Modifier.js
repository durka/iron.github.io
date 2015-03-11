(function() {var implementors = {};
implementors['iron'] = ["<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='iron/response/modifiers/struct.ContentType.html' title='iron::response::modifiers::ContentType'>ContentType</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;B: <a class='trait' href='iron/response/modifiers/trait.Bodyable.html' title='iron::response::modifiers::Bodyable'>Bodyable</a>&gt; Modifier&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='iron/response/modifiers/struct.Body.html' title='iron::response::modifiers::Body'>Body</a>&lt;B&gt;","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='iron/response/modifiers/struct.Status.html' title='iron::response::modifiers::Status'>Status</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='iron/response/struct.Response.html' title='iron::response::Response'>Response</a>&gt; for <a class='struct' href='iron/response/modifiers/struct.Redirect.html' title='iron::response::modifiers::Redirect'>Redirect</a>",];implementors['lib'] = ["<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='lib/mime/struct.Mime.html' title='lib::mime::Mime'>Mime</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt;","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for &amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a href='http://doc.rust-lang.org/nightly/std/primitive.slice.html'>&amp;'a [</a><a href='http://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a href='http://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/fs/struct.File.html' title='std::fs::File'>File</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for &amp;'a <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='enum' href='lib/status/enum.Status.html' title='lib::status::Status'>Status</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;H&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='lib/modifiers/struct.Header.html' title='lib::modifiers::Header'>Header</a>&lt;H&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, H&gt; Modifier&lt;<a class='struct' href='lib/request/struct.Request.html' title='lib::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='lib/modifiers/struct.Header.html' title='lib::modifiers::Header'>Header</a>&lt;H&gt;","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='lib/modifiers/struct.Redirect.html' title='lib::modifiers::Redirect'>Redirect</a>",];implementors['lib'] = ["<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='lib/mime/struct.Mime.html' title='lib::mime::Mime'>Mime</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt;","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for &amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a href='http://doc.rust-lang.org/nightly/std/primitive.slice.html'>&amp;'a [</a><a href='http://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a href='http://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/fs/struct.File.html' title='std::fs::File'>File</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for &amp;'a <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='enum' href='lib/status/enum.Status.html' title='lib::status::Status'>Status</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;H&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='lib/modifiers/struct.Header.html' title='lib::modifiers::Header'>Header</a>&lt;H&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, H&gt; Modifier&lt;<a class='struct' href='lib/request/struct.Request.html' title='lib::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='lib/modifiers/struct.Header.html' title='lib::modifiers::Header'>Header</a>&lt;H&gt;","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='lib/modifiers/struct.Redirect.html' title='lib::modifiers::Redirect'>Redirect</a>",];implementors['lib'] = ["<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='lib/mime/struct.Mime.html' title='lib::mime::Mime'>Mime</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt;","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for &amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a href='http://doc.rust-lang.org/nightly/std/primitive.slice.html'>&amp;'a [</a><a href='http://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a href='http://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/fs/struct.File.html' title='std::fs::File'>File</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for &amp;'a <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='enum' href='lib/status/enum.Status.html' title='lib::status::Status'>Status</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;H&gt; Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='lib/modifiers/struct.Header.html' title='lib::modifiers::Header'>Header</a>&lt;H&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, H&gt; Modifier&lt;<a class='struct' href='lib/request/struct.Request.html' title='lib::request::Request'>Request</a>&lt;'a&gt;&gt; for <a class='struct' href='lib/modifiers/struct.Header.html' title='lib::modifiers::Header'>Header</a>&lt;H&gt;","<a class='stability Unmarked' title='No stability level'></a>impl Modifier&lt;<a class='struct' href='lib/response/struct.Response.html' title='lib::response::Response'>Response</a>&gt; for <a class='struct' href='lib/modifiers/struct.Redirect.html' title='lib::modifiers::Redirect'>Redirect</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

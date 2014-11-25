(function() {var implementors = {};
implementors['lib'] = ["<a class='stability Unmarked' title='No stability level'></a>impl Assoc&lt;<a class='enum' href='http://doc.rust-lang.org/nightly/serialize/json/enum.Json.html' title='serialize::json::Json'>Json</a>&gt; for <a class='struct' href='lib/struct.BodyParser.html' title='lib::BodyParser'>BodyParser</a>",];
implementors['urlencoded'] = ["<a class='stability Unmarked' title='No stability level'></a>impl Assoc&lt;<a class='type' href='urlencoded/type.QueryMap.html' title='urlencoded::QueryMap'>QueryMap</a>&gt; for <a class='struct' href='urlencoded/struct.UrlEncodedQuery.html' title='urlencoded::UrlEncodedQuery'>UrlEncodedQuery</a>","<a class='stability Unmarked' title='No stability level'></a>impl Assoc&lt;<a class='type' href='urlencoded/type.QueryMap.html' title='urlencoded::QueryMap'>QueryMap</a>&gt; for <a class='struct' href='urlencoded/struct.UrlEncodedBody.html' title='urlencoded::UrlEncodedBody'>UrlEncodedBody</a>",];
implementors['router'] = ["<a class='stability Unmarked' title='No stability level'></a>impl Assoc&lt;<a class='struct' href='router/struct.Params.html' title='router::Params'>Params</a>&gt; for <a class='struct' href='router/struct.Router.html' title='router::Router'>Router</a>",];
implementors['mount'] = ["<a class='stability Unmarked' title='No stability level'></a>impl Assoc&lt;<a class='struct' href='iron/request/url/struct.Url.html' title='iron::request::url::Url'>Url</a>&gt; for <a class='struct' href='mount/struct.OriginalUrl.html' title='mount::OriginalUrl'>OriginalUrl</a>",];
implementors['bodyparser'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;T: 'static + <a class='trait' href='http://doc.rust-lang.org/nightly/serialize/serialize/trait.Decodable.html' title='serialize::serialize::Decodable'>Decodable</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/serialize/json/struct.Decoder.html' title='serialize::json::Decoder'>Decoder</a>, <a class='enum' href='http://doc.rust-lang.org/nightly/serialize/json/enum.DecoderError.html' title='serialize::json::DecoderError'>DecoderError</a>&gt;&gt; Assoc&lt;T&gt; for <a class='struct' href='bodyparser/struct.BodyParser.html' title='bodyparser::BodyParser'>BodyParser</a>&lt;T&gt;",];
implementors['persistent'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D: 'static&gt; Assoc&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/sync/lock/struct.RWLock.html' title='sync::lock::RWLock'>RWLock</a>&lt;D&gt;&gt;&gt; for <a class='struct' href='persistent/struct.State.html' title='persistent::State'>State</a>&lt;P, D&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D: 'static&gt; Assoc&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;D&gt;&gt; for <a class='struct' href='persistent/struct.Read.html' title='persistent::Read'>Read</a>&lt;P, D&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D: 'static&gt; Assoc&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/sync/lock/struct.Mutex.html' title='sync::lock::Mutex'>Mutex</a>&lt;D&gt;&gt;&gt; for <a class='struct' href='persistent/struct.Write.html' title='persistent::Write'>Write</a>&lt;P, D&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

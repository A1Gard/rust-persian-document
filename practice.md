# تمرین‌های rust جهت محک توانمندی و افزایش آن

## فصل ۳: مفاهیم برنامه‌نویسی رایج (Common Programming Concepts)

در این فصل، کتاب بر روی مفاهیم پایه‌ای مانند متغیرها و تغییرپذیری (variables and mutability)، انواع داده‌ها (data types شامل انواع اسکالر مانند اعداد صحیح، اعشاری، بولین و کاراکتر، و انواع ترکیبی مانند تاپل و آرایه)، توابع (functions شامل تعریف، پارامترها، عبارت‌ها در مقابل دستورها، و مقادیر بازگشتی)، کامنت‌ها (comments)، و جریان کنترل (control flow شامل if، loop، while و for) تمرکز دارد. این مفاهیم بر پایه دانش مقدماتی از فصل‌های قبلی (مانند نصب Rust و برنامه ساده حدس زدن عدد در فصل ۲) ساخته شده‌اند، اما تمرین‌ها عمدتاً بر محتوای این فصل تکیه دارند و حداکثر ۱۰٪ تلرانس برای عناصر ساده مانند ورودی پایه‌ای از فصل ۲ مجاز است.

 - - تمرین ۱: برنامه‌ای بنویسید که یک آرایه از اعداد صحیح تعریف کند (با استفاده از انواع داده‌های اسکالر و ترکیبی مانند [i32; 5])، سپس با استفاده از یک حلقه for بر روی عناصر آرایه پیمایش کند و بررسی کند که آیا هر عدد زوج است یا فرد (با استفاده از if و عملگر %). اگر زوج بود، آن را دو برابر کند و اگر فرد بود، آن را بدون تغییر نگه دارد. در نهایت، با استفاده از یک تابع جداگانه که آرایه را به عنوان پارامتر دریافت می‌کند، مجموع همه عناصر تغییر یافته را محاسبه و چاپ کنید. برای مثال، آرایه اولیه را [1, 2, 3, 4, 5] در نظر بگیرید و نتیجه را در main چاپ کنید. این تمرین بر متغیرها، انواع داده‌ها، توابع، و جریان کنترل تمرکز دارد.

- - تمرین ۲: یک تابع تعریف کنید که یک تاپل دریافت کند (مانند (i32, f64, bool)) که شامل یک عدد صحیح، یک عدد اعشاری و یک مقدار بولین باشد. در داخل تابع، با استفاده از shadowing برای تغییر متغیرها، مقدار عدد صحیح را با عدد اعشاری جمع کنید (با تبدیل مناسب انواع)، سپس اگر مقدار بولین true بود، نتیجه را در یک حلقه while (تا زمانی که نتیجه کمتر از ۱۰ باشد) دو برابر کنید. در نهایت، تابع نتیجه نهایی را برگرداند. در main، یک تاپل نمونه بسازید، تابع را فراخوانی کنید و نتیجه را چاپ کنید. این تمرین بر انواع داده‌های ترکیبی، shadowing، توابع، و حلقه‌ها تأکید دارد.

- - تمرین ۳: برنامه‌ای بنویسید که یک ثابت (constant) برای یک مقدار ثابت مانند PI (3.14) تعریف کند، سپس با استفاده از یک تابع که دو پارامتر f64 دریافت می‌کند (شعاع و ارتفاع)، مساحت یک استوانه را محاسبه کند (با استفاده از عبارت‌ها برای بازگشت مقدار). در main، از یک حلقه loop برای تکرار محاسبه تا زمانی که یک شرط (مانند اگر مساحت بیش از ۱۰۰ باشد، break) برقرار شود، استفاده کنید. مقادیر را hardcoded کنید و نتایج را چاپ کنید. این تمرین بر ثابت‌ها، توابع، عبارت‌ها، و حلقه‌های نامحدود تمرکز دارد.

## فصل ۴: درک مالکیت (Understanding Ownership)

این فصل بر مالکیت (ownership)، قوانین مالکیت (مانند هر مقدار یک مالک دارد، وقتی مالک خارج از scope می‌شود مقدار drop می‌شود)، move vs copy، پشته و هیپ (stack and heap)، رشته‌ها (String vs &str)، ارجاع‌ها و borrowing (references, mutable references)، قوانین borrowing (حداکثر یک mutable reference یا چند immutable)، و برش‌ها (slices) تمرکز دارد. وابستگی به فصل‌های قبلی شامل متغیرها، انواع داده‌ها و توابع است، اما تمرین‌ها ۹۰٪ بر مالکیت و ارجاع‌ها تکیه دارند.

- - تمرین ۱: برنامه‌ای بنویسید که یک String تعریف کند، آن را به یک تابع پاس دهید که مالکیت را move کند و در تابع، طول String را محاسبه و چاپ کند (بدون بازگشت، زیرا مالکیت منتقل شده). سپس در main سعی کنید String اصلی را استفاده کنید و ببینید کامپایلر خطا می‌دهد (برای درک move). حالا تابع را تغییر دهید تا &String دریافت کند (borrowing) و طول را برگرداند بدون move. این تمرین بر move، borrowing و slices (برای بخشی از String) تمرکز دارد.

- - تمرین ۲: یک تابع بنویسید که یک mutable reference به یک String دریافت کند، سپس در داخل تابع، محتوای String را تغییر دهد (مثلاً اضافه کردن یک suffix). در main، یک String mutable بسازید، آن را به تابع پاس دهید، سپس بعد از فراخوانی، String تغییر یافته را چاپ کنید. حالا سعی کنید دو mutable reference همزمان بسازید و ببینید کامپایلر جلوگیری می‌کند. این تمرین بر mutable references، قوانین borrowing و drop تمرکز دارد.

- - تمرین ۳: برنامه‌ای بنویسید که یک آرایه تعریف کند، سپس یک slice از بخشی از آرایه بسازد (مانند &arr[1..3])، و آن slice را به یک تابع پاس دهید که مجموع عناصر slice را محاسبه کند (با borrowing). در main، slice کامل آرایه را هم بسازید و مقایسه کنید. این تمرین بر slices، references و قوانین مالکیت تأکید دارد.

## فصل ۵: استفاده از structها برای ساختاردهی داده‌های مرتبط (Using Structs to Structure Related Data)

تمرکز بر تعریف structها، نمونه‌سازی، فیلدها، methodها (با impl)، associated functions، و مثال‌هایی مانند Rectangle. وابستگی به مالکیت و انواع داده‌ها از فصل‌های قبلی.

- تمرین ۱: یک struct به نام Point تعریف کنید با فیلدهای x و y از نوع f64. یک method برای محاسبه فاصله از مبدا (با استفاده از sqrt از std::f64) اضافه کنید. در main، یک instance بسازید و method را فراخوانی کنید. حالا یک associated function برای ساخت Point جدید اضافه کنید.

- تمرین ۲: structی به نام User تعریف کنید با فیلدهای name (String)، age (u32)، active (bool). یک method برای افزایش age اضافه کنید (mutable self). در main، User بسازید، age را تغییر دهید و چاپ کنید.

- تمرین ۳: struct Rectangle با width و height تعریف کنید. method area اضافه کنید. associated function square برای ساخت مربع اضافه کنید. در main، rectangle بسازید و area را محاسبه کنید.

## فصل ۶: enumها و تطبیق الگو (Enums and Pattern Matching)

تمرکز بر enumها، variantها، Option<T>، match، if let. وابستگی به structها و مالکیت.

- تمرین ۱: enum Shape با variantهای Circle(f64)، Rectangle(f64, f64) تعریف کنید. با match، area محاسبه کنید. در main، shapes مختلف بسازید و area چاپ کنید.

- تمرین ۲: enum Message با variantهای Quit، Move {x: i32, y: i32}، Write(String). تابع process که با match هر کدام را هندل کند. در main، messageها بسازید و process فراخوانی کنید.

- تمرین ۳: از Option<i32> استفاده کنید. تابع که Option دریافت کند و با if let unwrap کند و دو برابر کند، иначе default بدهد.

## فصل ۷: مدیریت پروژه‌های در حال رشد با پکیج‌ها، کریت‌ها و ماژول‌ها (Managing Growing Projects with Packages, Crates, and Modules)

تمرکز بر پکیج‌ها، کریت‌ها، ماژول‌ها، pathها، use، privacy (pub). وابستگی به structها و enumها.

- تمرین ۱: یک crate با ماژول front_of_house و زیرماژول hosting تعریف کنید. function pub در hosting اضافه کنید. در main (binary crate)، از path یا use استفاده کنید تا function را فراخوانی کنید.

- تمرین ۲: struct pub در یک ماژول تعریف کنید با فیلدهای pub و private. method pub اضافه کنید که به private دسترسی دارد. در crate دیگر، struct بسازید و method فراخوانی کنید اما به private نه.

- تمرین ۳: یک library crate با ماژول math و functions مانند add و subtract بسازید. در binary crate، use کنید و functions را تست کنید.

## فصل ۸: مجموعه‌های رایج (Common Collections)

تمرکز بر Vec<T>، String، HashMap<K, V>، روش‌ها مانند push, get, iter.

- تمرین ۱: Vec<i32> بسازید، عناصر اضافه کنید، با for iter کنید و میانگین محاسبه کنید.

- تمرین ۲: String بسازید، &str اضافه کنید، to_uppercase اعمال کنید، طول چاپ کنید.

- تمرین ۳: HashMap<String, i32> برای scores بسازید، insert کنید، get کنید، یا update کنید اگر وجود داشت.

## فصل ۹: مدیریت خطا (Error Handling)

تمرکز بر panic!، Result<T, E>، ? operator، custom errors.

- تمرین ۱: تابع که i32 دریافت کند، اگر منفی panic کند، иначе sqrt برگرداند (با Result برای خطا).

- تمرین ۲: تابع read_file که Result<String, io::Error> برگرداند، با fs::read_to_string.

- تمرین ۳: custom error enum تعریف کنید، تابع که String parse به i32 کند با Result و custom error.

## فصل ۱۰: انواع ژنریک، traitها و lifetimeها (Generic Types, Traits, and Lifetimes)

تمرکز بر generics، traits (define, impl)، lifetimes.

- تمرین ۱: function generic largest<T> که slice T برگرداند largest (با trait PartialOrd).

- تمرین ۲: trait Summary برای struct Tweet و NewsArticle، method summarize. function notify که T: Summary دریافت کند.

- تمرین ۳: struct با lifetime، function longest که دو &str دریافت کند و longest با 'a برگرداند.

## فصل ۱۱: نوشتن تست‌های خودکار (Writing Automated Tests)

تمرکز بر #[test]، assert!، assert_eq!، test organization (unit, integration).

- تمرین ۱: function add_two، تست برای چند ورودی.

- تمرین ۲: struct Rectangle با can_hold method، تست برای موارد true/false.

- تمرین ۳: function که panic کند اگر ورودی منفی، تست با #[should_panic].

## فصل ۱۲: پروژه I/O: ساخت برنامه خط فرمان (An I/O Project: Building a Command Line Program)

تمرکز بر args، file I/O، env vars، stderr.

- تمرین ۱: برنامه که args بخواند (query, file)، file بخواند، خطوط شامل query جستجو کند و چاپ کند.

- تمرین ۲: case-insensitive اضافه کنید با env var.

- تمرین ۳: errors را با Result هندل کنید و به stderr بنویسید.

## فصل ۱۳: ویژگی‌های زبان تابعی: iteratorها و closureها (Functional Language Features: Iterators and Closures)

تمرکز بر closures (| |)، iterators (iter, map, filter, collect).

- تمرین ۱: closure برای دو برابر کردن، در vec اعمال با map و collect.

- تمرین ۲: struct Shoe، function shoes_in_size که vec shoe فیلتر با closure.

- تمرین ۳: iterator custom impl برای counter با next.

## فصل ۱۴: بیشتر در مورد Cargo و Crates.io (More about Cargo and Crates.io)

تمرکز بر workspaces، publishing، install binaries، custom commands.

- تمرین ۱: workspace با دو crate بسازید، یکی library، یکی binary که از library استفاده کند.

- تمرین ۲: crate ساده publish-ready بسازید با docs و tests.

- تمرین ۳: custom cargo command با subcommand تعریف کنید.

## فصل ۱۵: اشاره‌گرهای هوشمند (Smart Pointers)

تمرکز بر Box<T>، Rc<T>، RefCell<T>، reference cycles.

- تمرین ۱: enum List با Box برای linked list recursive.

- تمرین ۲: Rc برای shared data، count refs.

- تمرین ۳: RefCell برای interior mutability، mutable borrow در runtime.

## فصل ۱۶: concurrency بدون ترس (Fearless Concurrency)

تمرکز بر threads (spawn, join)، message passing (mpsc channel)، shared state (Mutex, Arc).

- تمرین ۱: thread spawn کنید که counter افزایش دهد، main منتظر join.

- تمرین ۲: channel بسازید، thread sender، main receiver.

- تمرین ۳: Mutex<i32> با Arc، چند thread افزایش دهند.

## فصل ۱۷: ویژگی‌های برنامه‌نویسی شی‌گرا در Rust (Object Oriented Programming Features of Rust)

تمرکز بر traits برای OOP، state pattern.

- تمرین ۱: trait Draw برای structs مختلف، vec trait objects.

- تمرین ۲: state pattern برای Post (draft, pending, published) با methods.

- تمرین ۳: GUI sim با Button و SelectBox impl Screen trait.

## فصل ۱۸: الگوها و تطبیق (Patterns and Matching)

تمرکز بر patterns در match, if let, while let, for, let, refutability.

- تمرین ۱: function با match برای destructure struct.

- تمرین ۲: while let برای pop از vec تا none.

- تمرین ۳: pattern با @ برای bind value در match.

## فصل ۱۹: ویژگی‌های پیشرفته (Advanced Features)

تمرکز بر unsafe (dereference raw ptr, call unsafe fn)، advanced traits/types/functions, macros.

- تمرین ۱: unsafe block برای raw pointer.

- تمرین ۲: macro declaratives برای vec! similar.

- تمرین ۳: advanced trait با associated types.

## فصل ۲۰: پروژه نهایی: ساخت وب‌سرور چندنخی (Final Project: Building a Multithreaded Web Server)

تمرکز بر TCP, HTTP, thread pool, integration همه مفاهیم قبلی.

- تمرین ۱: TCP listener بسازید، connection بخوانید، response ساده بفرستید.

- تمرین ۲: thread pool ساده با spawn برای handle connections.

- تمرین ۳: HTTP parse کنید، بر اساس path فایل بخوانید و response بدهید.
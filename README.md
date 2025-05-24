# مستندات ترجمه‌شده کتاب Rust

خوش آمدید به مستندات ترجمه‌شده کتاب **Rust**! این پروژه شامل ترجمه کامل فصول کتاب رسمی **Rust** به فارسی است که به شما کمک می‌کند تا با این زبان برنامه‌نویسی قدرتمند و ایمن آشنا شوید. محتوا به‌صورت فصل‌به‌فصل سازمان‌دهی شده و شامل مقدمه‌ها و پیوست‌ها برای اطلاعات تکمیلی است.


## دسترسی آنلاین

https://a1gard.github.io/rust-persian-document/#/

## مقدمه

این بخش شامل مقدمه‌های کتاب است که زمینه را برای یادگیری **Rust** فراهم می‌کنند:

- [پیشگفتار](./e1.foreword.md)
- [مقدمه](./e2.introduation.md)

## فصل‌ها

محتوای اصلی کتاب به‌صورت فصل‌به‌فصل در زیر آورده شده است. هر فصل به موضوعات خاصی در **Rust** می‌پردازد، از مفاهیم پایه تا ویژگی‌های پیشرفته.

### فصل ۱: شروع کار
- [شروع کار](./010.getting-starrted.md)
- [نصب](./011.installation.md)
- [سلام، جهان!](./012.hello-world.md)
- [سلام، Cargo!](./013.hello-cargo.md)

### فصل ۲: آموزش بازی حدس
- [آموزش: بازی حدس](./020.guessing-game-tutorial.md)

### فصل ۳: مفاهیم برنامه‌نویسی رایج
- [مفاهیم برنامه‌نویسی رایج](./030.common-programming-concepts.md)
- [متغیرها و تغییرپذیری](./031.variables-and-mutability.md)
- [انواع داده](./032.data-types.md)
- [توابع](./33.functions.md)
- [کامنت‌ها](./034.comments.md)
- [جریان کنترل](./035.control-flow.md)

### فصل ۴: درک مالکیت
- [درک مالکیت](./040.understanding-ownership.md)
- [مالکیت چیست؟](./041.what-is-ownership.md)
- [ارجاعات و قرض‌گیری](./042.references-and-borrowing.md)
- [برش‌ها](./043.slices.md)

### فصل ۵: استفاده از ساختارها برای سازمان‌دهی داده‌ها
- [تعریف و نمونه‌سازی ساختارها](./051.efining-structs.md)
- [مثالی از برنامه با ساختارها](./052.example-structs.md)
- [نحو متد](./053.method-syntax.md)

### فصل ۶: شمارشگرها و جریان کنترل
- [شمارشگرها](./060.enums.md)
- [تعریف یک شمارشگر](./061.defining-an-enum.md)
- [عملگر `match`](./062.match.md)
- [جریان کنترل با `if let`](./063.if-let.md)

### فصل ۷: مدیریت پروژه‌های در حال رشد با بسته‌ها، کریت‌ها و ماژول‌ها
- [مدیریت پروژه‌های در حال رشد با بسته‌ها، کریت‌ها و ماژول‌ها](./070.managing-growing-projects-with-packages-crates-and-modules.md)
- [بسته‌ها و کریت‌ها](./071.packages-and-crates.md)
- [تعریف ماژول‌ها برای کنترل حوزه و حریم خصوصی](./072.defining-modules-to-control-scope-and-privacy.md)
- [مسیرها برای ارجاع به آیتم‌ها در درخت ماژول](./073.paths-for-referring-to-an-item-in-the-module-tree.md)
- [آوردن مسیرها به حوزه با کلمه‌کلیدی `use`](./074.bringing-paths-into-scope-with-the-use-keyword.md)
- [جداسازی ماژول‌ها در فایل‌های مختلف](./075.separating-modules-into-different-files.md)

### فصل ۸: مجموعه‌های رایج
- [مجموعه‌های رایج](./080.common-collections.md)
- [وکتورها](./081.vectors.md)
- [رشته‌ها](./082.strings.md)
- [نقشه‌های هش](./083.hash-maps.md)

### فصل ۹: مدیریت خطا
- [مدیریت خطا](./090.error-handling.md)
- [خطاهای غیرقابل بازیابی با `panic!`](./091.unrecoverable-errors-with-panic.md)
- [خطاهای قابل بازیابی با `Result`](./092.recoverable-errors-with-result.md)
- [به `panic!` یا نه به `panic!`](./093.painc-or-not-panic.md)

### فصل ۱۰: Generic‌ها، ویژگی‌‌ها و طول عمرها
- [Generic‌ها، ویژگی‌‌ها و طول عمرها](./100.generics.md)
- [نحو Generic‌ها](./101.syntax.md)
- [ویژگی‌‌ها](./102.traits.md)
- [نحو طول عمرها](./103.lifetime-syntax.md)

### فصل ۱۱: نوشتن تست‌های خودکار
- [تست‌نویسی](./110.testing.md)
- [نوشتن تست‌ها](./111.writing-tests.md)
- [اجرای تست‌ها](./112.running-tests.md)
- [سازمان‌دهی تست‌ها](./113.test-organization.md)

### فصل ۱۲: یک پروژه ورودی/خروجی: ساخت یک برنامه خط فرمان
- [یک پروژه ورودی/خروجی](./120.an-io-project.md)
- [پذیرش آرگومان‌های خط فرمان](./121.accepting-command-line-arguments.md)
- [خواندن یک فایل](./122.reading-a-file.md)
- [بهبود مدیریت خطا و ماژولار بودن](./123.improving-error-handling-and-modularity.md)
- [تست عملکرد کتابخانه](./124.testing-the-librarys-functionality.md)
- [کار با متغیرهای محیطی](./125.working-with-environment-variables.md)
- [نوشتن به `stderr` به جای `stdout`](./126.writing-to-stderr-instead-of-stdout.md)

### فصل ۱۳: ویژگی‌های تابعی: بسته‌ها و تکرارکننده‌ها
- [ویژگی‌های زبان تابعی](./130.functional-features.md)
- [بسته‌ها](./131.closures.md)
- [تکرارکننده‌ها](./132.iterators.md)
- [بهبود پروژه ورودی/خروجی ما](./133.improving-our-io-project.md)
- [مقایسه عملکرد: حلقه‌ها در مقابل تکرارکننده‌ها](./134.performance.md)

### فصل ۱۴: بیشتر درباره Cargo و Crates.io
- [بیشتر درباره Cargo و Crates.io](./140.more-about-cargo.md)
- [پروفایل‌های انتشار](./141.release-profiles.md)
- [انتشار یک کریت به Crates.io](./142.publishing-to-crates-io.md)
- [فضاهای کاری Cargo](./143.cargo-workspaces.md)
- [نصب باینری‌ها با Cargo](./144.installing-binaries.md)
- [گسترش Cargo با دستورات سفارشی](./145.extending-cargo.md)

### فصل ۱۵: اشاره‌گرهای هوشمند
- [اشاره‌گرهای هوشمند](./150.smart-pointers.md)
- [استفاده از `Box<T>` برای اشاره به داده‌ها در هیپ](./151.box.md)
- [استفاده از اشاره‌گرهای هوشمند مانند ارجاعات با `Deref`](./152.deref.md)
- [اجرای کد در زمان پاکسازی با ویژگی‌ `Drop`](./153.drop.md)
- [شمارش ارجاعات با `Rc<T>`](./154.rc.md)
- [تغییرپذیری داخلی با `RefCell<T>`](./155.interior-mutability.md)
- [جلوگیری از چرخه‌های ارجاعی: تبدیل یک `Rc<T>` به یک `Weak<T>`](./156.reference-cycles.md)

### فصل ۱۶: برنامه‌نویسی هم‌زمان
- [برنامه‌نویسی هم‌زمان بدون ترس](./160.concurrency.md)
- [استفاده از نخ‌ها برای اجرای همزمان کد](./161.threads.md)
- [انتقال پیام بین نخ‌ها](./162.message-passing.md)
- [وضعیت مشترک هم‌زمان](./163.shared-state.md)
- [هم‌زمانی قابل گسترش با ویژگی‌‌های `Sync` و `Send`](./164.extensible-concurrency-sync-and-send.md)

### فصل ۱۷: برنامه‌نویسی ناهمگام
- [ناهمگام و انتظار با `async`/`await`](./170.async-await.md)
- [آینده‌ها و نحو آن‌ها](./171.futures-and-syntax.md)
- [هم‌زمانی با `async`](./172.concurrency-with-async.md)
- [آینده‌های بیشتر](./173.more-futures.md)
- [جریان‌ها](./174.streams.md)
- [ویژگی‌‌ها برای `async`](./175.traits-for-async.md)
- [آینده‌ها، وظایف و نخ‌ها](./176.futures-tasks-threads.md)

### فصل ۱۸: ویژگی‌های شیءگرا در Rust
- [ویژگی‌های شیءگرا در Rust](./180.oop.md)
- [اشیا ویژگی‌ برای مقادیر از انواع مختلف](./181.trait-objects.md)
- [برنامه‌نویسی شیءگرا چیست؟](./181.what-is-oo.md)
- [الگوهای طراحی شیءگرا](./183.oo-design-patterns.md)

### فصل ۱۹: الگوها و تطبیق
- [الگوها و تطبیق](./190.patterns.md)
- [همه مکان‌هایی که می‌توان از الگوها استفاده کرد](./191.all-the-places-for-patterns.md)
- [قابلیت رد شدن: آیا یک الگو ممکن است شکست بخورد؟](./192.refutability.md)
- [نحو الگوها](./193.pattern-syntax.md)

### فصل ۲۰: ویژگی‌های پیشرفته
- [ویژگی‌های پیشرفته](./200.advanced-features.md)
- [Rust ناامن](./201.unsafe-rust.md)
- [ویژگی‌‌های پیشرفته](./202.advanced-traits.md)
- [انواع پیشرفته](./203.advanced-types.md)
- [توابع و بسته‌های پیشرفته](./204.advanced-functions-and-closures.md)
- [ماکروها](./205.macros.md)

### فصل ۲۱: پروژه نهایی: ساخت یک وب‌سرور چندنخی
- [پروژه نهایی: ساخت یک وب‌سرور](./210.final-project-a-web-server.md)
- [یک وب‌سرور تک‌نخی](./211.single-threaded.md)
- [تبدیل وب‌سرور به چندنخی](./212.multithreaded.md)
- [خاموشی و پاکسازی زیبا](./213.graceful-shutdown-and-cleanup.md)

### پیوست‌ها
- [پیوست‌ها](./220.appendix.md)
- [کلیدواژه‌ها](./221.keywords.md)
- [عملگرها و نمادها](./222.operators.md)
- [ویژگی‌‌های قابل اشتقاق (قابل‌استنتاج)](./223.derivable-traits.md)
- [ابزارهای مفید توسعه](./224.useful-development-tools.md)
- [ویرایش‌ها](./225.editions.md)
- [نحوه ساخت Rust و Rust شبانه](./226.appendix-07-nightly-rust.md)
- [سوالات متداول](./227.faq.md)
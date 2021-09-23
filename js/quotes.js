const quotes=[
    {
        id : 1,
        quote: "Cuộc sống chỉ mang đến cho bạn 10% cơ hội, 90% còn lại là cách mà bạn phản ứng với nó.",
        author: "Sưu tầm...",
    },
    {
        id : 2,
        quote: "Hãy tìm kiếm 3 sở thích của bạn: Một cái để kiếm tiền, một cái để bạn phát triển và một cái để sáng tạo.",
        author: "Sưu tầm...",
    },
    {
        id : 3,
        quote: "Để có thể thành công, bạn buộc phải tin rằng bạn có thể.",
        author: "Sưu tầm...",
    },
    {
        id:4,
        quote: "Không có gì là không thể với một người luôn biết cố gắng.",
        author: "Sưu tầm...",
    },
    {
        id:5,
        quote: "Nghĩ quá nhiều sẽ hủy hoại bạn. Hủy hoại thực tại, thay đổi mọi thứ xung quanh, khiến bạn lo lắng và làm mọi thứ trở nên tồi tệ hơn bạn nghĩ.",
        author: "Sưu tầm...",
    },
    {
        id:6,
        quote: "Hãy luyện tập như thể bạn chưa bao giờ chiến thắng. Hãy hành động như thể chưa bao giờ bạn thất bại.",
        author: "Sưu tầm...",
    },
    {
        id:7,
        quote: "Chỉ cần bạn không dừng lại thì việc bạn tiến chậm cũng không là vấn đề.",
        author: "Sưu tầm...",
    },
    {
        id:8,
        quote: 'Bất kỳ ai cố gắng "dìm" bạn xuống thì họ đều thua kém bạn.',
        author: "Sưu tầm...",
    },
    {
        id:9,
        quote: "Cách để bắt đầu đó là dừng việc nói lại và hãy bắt đầu làm.",
        author: "Sưu tầm...",
    },
    {
        id:10,
        quote: "Hãy lắng nghe một cách cẩn thận điều người khác nói với bạn về một ai đó. Đấy chính là cách mà họ sẽ nói với ai đó về bạn.",
        author: "Sưu tầm...",
    },
    {
        id:11,
        quote: "Giữ đôi mắt của bạn hướng lên bầu trời và đôi chân trên mặt đất.",
        author: "Sưu tầm...",
    },
    {
        id:12,
        quote: "Có hai điều cần nhớ trong cuộc sống: Hãy chăm sóc suy nghĩ của bạn khi bạn một mình và hãy cẩn trọng với lời nói khi ở chốn đông người.",
        author: "Sưu tầm...",
    },
    {
        id:13,
        quote: "Hãy không ngừng học hỏi. Nếu bạn là người thông minh nhất trong phòng thì thực sự là bạn đã ở nhầm chỗ.",
        author: "Sưu tầm...",
    },
    {
        id:14,
        quote: "Đừng đánh mất bản thân mình khi cố gắng níu giữ người mà không hề quan tâm tới việc sắp mất bạn.",
        author: "Sưu tầm...",
    },
    {
        id:15,
        quote: "Hãy làm những thứ khó khăn khi chúng còn dễ dàng và làm những thứ vĩ đại khi chúng còn nhỏ bé. Hành trình ngàn dặm bắt đầu bằng những bước chân.",
        author: "Sưu tầm...",
    },
    {
        id:16,
        quote: "Hãy dừng để ý tới những khó khăn của bạn mà hãy biết ơn những gì bạn có.",
        author: "Sưu tầm...",
    },
    {
        id:17,
        quote: "Không chuẩn bị nghĩa là bạn đã sẵn sàng cho việc thất bại.",
        author: "Sưu tầm...",
    },
    {
        id:18,
        quote: "Bạn muốn biết bạn là ai? Đừng hỏi nữa. Hãy hành động! Hành động sẽ định nghĩa con người bạn.",
        author: "Sưu tầm...",
    },
    {
        id:19,
        quote: 'Trong khi bạn nhìn họ như những gã "điên" thì chúng tôi nhìn họ như những thiên tài. Bởi vì chỉ có những người điên đến mức nghĩ là có thể thay đổi thế giới thì mới là những người làm được.',
        author: "Sưu tầm...",
    },
    {
        id:20,
        quote: "Không bao giờ, không bao giờ, không bao giờ từ bỏ.",
        author: "Sưu tầm...",
    }
];

const quote = document.querySelector(".js-location span");
//const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
//author.innerText=todaysQuote.author;


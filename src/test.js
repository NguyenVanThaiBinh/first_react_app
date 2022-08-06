import React from "react";

// bai 15
// const courses = [
//          {
//                   name: 'HTML, CSS, JavaScript'
//          },
//          {
//                   name:'Angular, Vue'
//          },
//          {
//                   name:'Must be Responsive!!!'
//          }
// ]

// const postItem = React.createElement(
//          'div',
//          {
//                   className: 'post-item',
//                   style: { color: 'red'
//          }
//          },
//          React.createElement('h2',{
//                   title: 'Binh Hu'
//          },'Learn React')
// )
//bai 16
// function Header(){
//          return (
//                   <div className="header">Header</div>
//          )
// }

// class Content extends React.Component{
//          render(){
//                   return <div className="content">New Conten</div>
//          }
// }
// const ArrayRender =
// <div className="wrapper">
// <Header/>
// <Content />
// </div>

//bai 17
const listBanners = [
  {
    id: 8,
    placement: "home",
    type: "slideshow",
    slot_id: null,
    banner: "banners/Banner_web_ReactJS.png",
    title: "Học ReactJS Miễn Phí!",
    description:
      "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
    alt: "Khoá học ReactJS online tại F8",
    cta_title: "Đăng ký ngay",
    link_to: "https://fullstack.edu.vn/courses/reactjs?ref=banner",
    data: {
      props: {
        style: {
          "--cta-hover-color": "#2877FA",
          background: "linear-gradient(to right, #2877FA, #6717CD",
        },
      },
    },
    is_blank: 1,
    priority: 2,
    expired: "2022-12-12 00:00:00",
    created_at: "2022-12-11T10:00:00.000000Z",
    updated_at: "2022-05-25T05:15:58.000000Z",
    banner_url:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
  },
  {
    id: 3,
    placement: "home",
    type: "slideshow",
    slot_id: null,
    banner: "banners/Banner_01_2.png",
    title: "Thành Quả của Học Viên",
    description:
      "Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.",
    alt: "Thành quả của học viên",
    cta_title: "Xem thành quả",
    link_to:
      "https://fullstack.edu.vn/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8.html",
    data: {
      props: {
        style: {
          "--cta-hover-color": "#7612ff",
          background: "linear-gradient(to right, #7612ff, #05b2ff)",
        },
      },
    },
    is_blank: 1,
    priority: 3,
    expired: "2022-12-12 00:00:00",
    created_at: "2022-12-11T10:00:00.000000Z",
    updated_at: "2022-05-25T05:15:58.000000Z",
    banner_url:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png",
  },
  {
    id: 4,
    placement: "home",
    type: "slideshow",
    slot_id: null,
    banner: "banners/Banner_03_youtube.png",
    title: "F8 trên Youtube",
    description:
      "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
    alt: "F8 trên Youtube",
    cta_title: "Truy cập kênh",
    link_to: "https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw",
    data: {
      props: {
        style: {
          "--cta-hover-color": "#fe215e",
          background: "linear-gradient(to right, #fe215e , #ff9402",
        },
      },
    },
    is_blank: 1,
    priority: 4,
    expired: "2022-12-12 00:00:00",
    created_at: "2022-12-11T10:00:00.000000Z",
    updated_at: "2022-05-25T05:15:58.000000Z",
    banner_url:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png",
  },
  {
    id: 5,
    placement: "home",
    type: "slideshow",
    slot_id: null,
    banner: "banners/Banner_04_2.png",
    title: "F8 trên Facebook",
    description:
      "Binh Hu Muon Nam ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
    alt: "F8 trên Facebook",
    cta_title: "Truy cập nhóm",
    link_to: "https://www.facebook.com/groups/649972919142215",
    data: {
      props: {
        style: {
          "--cta-hover-color": "#007efe",
          background: "linear-gradient(to right, #007efe, #06c3fe",
        },
      },
    },
    is_blank: 1,
    priority: 5,
    expired: "2022-12-12 00:00:00",
    created_at: "2022-12-11T10:00:00.000000Z",
    updated_at: "2022-05-25T05:15:58.000000Z",
    banner_url:
      "https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png",
  },
];
//Have parameters
// function RenderBanners({
//   idBanners = "12",
//   images = "https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png",
//   title = "haha",
//   expired = "hoho",
//   description = "haha",
// }) {
//   return (
//     <div id={idBanners}>
//       <p></p>
//       <img src={images} alt={title} title={title}></img>
//       <p>{description}</p>
//       <p>{expired}</p>
//     </div>
//   );
// }

const RenderBanners = ({ listBanner }) => (
  <div>
    <img
      src={listBanner.banner_url}
      alt={listBanner.title}
      title={listBanner.title}
    ></img>
    <p>{listBanner.description}</p>
    <p>{listBanner.expired}</p>
  </div>
);

function test() {
  return (
    // <RenerBanners
    // id="12"
    // images="https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png"
    // title="haha"
    // expired="hoho"
    // description="haha"
    // />
    <div id="banner">
      {listBanners.map((listBanner) => (
        <RenderBanners
          key={listBanner.id}
          //Option 1 return props
          // idBanners={props.idBanners}
          // images={props.images}
          // title={props.title}
          // expired={props.expired}
          // description={props.description}
          //Option 2 Return Object
          listBanner={listBanner}
        />
      ))}
    </div>
  );
}
export default test;

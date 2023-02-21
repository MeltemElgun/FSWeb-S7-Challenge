import React, { useState } from "react";

export default function firmalar() {
  const firmalar = [
    {
      img:
        "https://b.zmtcdn.com/data/pictures/chains/1/18825651/549fa9a4b5709056b5133112ae2cf805.jpg?fit=around|300:273&crop=300:273;*,*",
      p1: "McDonald's",
      p2: "Amerikan-Fast Food-Burgers",
      span1: "20-30 Min",
      span2: "$5.99 Delivery Fee",
    },
    {
      img:
        "https://cdn.vox-cdn.com/thumbor/5DYbYIT--7rjMAHi1BsYy4o2gxI=/0x0:1200x1200/1200x800/filters:focal(504x504:696x696)/cdn.vox-cdn.com/uploads/chorus_image/image/69639162/_5_GreensDay_Programmatic_0001_2.7.jpg",
      p1: "McDonald's",
      p2: "Healthy-s-Salads",
      span1: "30-45 Min",
      span2: "$4.99 Delivery Fee",
    },
    {
      img:
        "https://d2wrwj382xgrci.cloudfront.net/Pictures/480xany/7/1/0/10710_pe_starbucks_packaging_87516.jpg",
      p1: "Starbucks",
      p2: "Cafe-Coffee& Tea-Breakfast and Brunch",
      span1: "10-20 Min",
      span2: "$3.99 Delivery Fee",
    },
  ];

  return (
    <div className="firma">
      {firmalar.map((blog) => (
        <div className="firmalar">
          <img className="firma-img" src={blog.img} />
          <div className="firmaTex">
            <p className="p1">{blog.p1}</p>
            <br />
            <p>{blog.p2}</p>
            <br />
            <span>{blog.span1}</span>
            <span>{blog.span2}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";

const newsContent = [
  {
    title: "Первая новость",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ad. Cum deserunt sit architecto quam reprehenderit perferendis veniam est, id enim illum esse aut dignissimos! Sequi accusantium officia iste aperiam."
  },
  {
    title: "Вторая  новость",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ad. Cum deserunt sit architecto quam reprehenderit perferendis veniam est, id enim illum esse aut dignissimos! Sequi accusantium officia iste aperiam."
  },
  {
    title: "Третья новость",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ad. Cum deserunt sit architecto quam reprehenderit perferendis veniam est, id enim illum esse aut dignissimos! Sequi accusantium officia iste aperiam."
  }
];

const News = () => {
    const newsLi = {
        listStyleType: 'none'
    }
  return (
    <div>
      <ul>
        {newsContent.map((item, index) => (
          <li style={newsLi} key={index}>
            <p>{item.title}.</p>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;

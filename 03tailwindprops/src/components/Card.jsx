import React from "react";

function Card({ authorName = "VK", post = "Not Assigned yet" }) {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/19744641/pexels-photo-19744641/free-photo-of-young-elegant-woman-in-a-black-dress-standing-on-the-background-of-patterned-rugs.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              rem impedit mollitia in quisquam odio repellendus consectetur?
              Ullam voluptatibus, repellat ducimus sequi, consequatur aliquam
              harum obcaecati modi reprehenderit quasi inventore?
            </p>
          </blockquote>
          <figcaption>
            <div>{authorName}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
      <br />
    </div>
  );
}

export default Card;

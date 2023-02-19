import "./post.css";

export default function Post() {
  return (
       <div className="post">
         <img
        className="postImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
        <div className="postInfo">
          <div className="postCats">
        	  <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Contrary to popular belief.</span>
        <hr />
         <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
  );
}

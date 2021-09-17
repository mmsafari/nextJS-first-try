import classes from './comment-list.module.scss';

function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Mahdi</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing2!</p>
        <div>
          By <address>Javad</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
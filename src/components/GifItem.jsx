
import {PropTypes} from 'prop-types';

export const GifItem = ({title, url}) => {
    // console.log(url);
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

// Config "prop-types"
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

// Specifies the default values for props:
// GifItem.defaultProps = {
//     title: 'Image Not Found',
//     url: 'https://media0.giphy.com/media/lqFHf5fYMSuKcSOJph/giphy.gif?cid=284aee55m6ffwyzjtf0gogvv8ruy5aicg4gr0x9gii75v8v8&rid=giphy.gif&ct=g'
//   };
  
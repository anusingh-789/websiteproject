import PropTypes from "prop-types";

function EventCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

EventCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default EventCard;

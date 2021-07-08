import PropTypes from 'prop-types';

export default function Filter({ id, value, onChange }) {
    return (
        <>
            <label htmlFor={id}>
            Find contacts by name
          </label>
          <input
              type="text"
              id={id}
          value={value}
          onChange={onChange}
          />
            
        </>
    )
}

Filter.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}



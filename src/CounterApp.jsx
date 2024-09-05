import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
    return (
        <div>
            <h1>Counter App</h1>
            <h2>{value}</h2>
        </div>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
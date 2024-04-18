import { useState } from 'react';
import PropTypes from 'prop-types';
CheckBox.propTypes = {
  checked: PropTypes.bool,
};

function CheckBox({ checked }) {
  const [isCheck, setIsCheck] = useState(checked);

  const handleChecked = () => {
    setIsCheck((state) => !state);
    console.log(isCheck);
  };
  return (
    <div className="form-input-radio" onClick={handleChecked}>
      <input type="checkbox" checked={isCheck} onChange={() => {}} />
    </div>
  );
}
export default CheckBox;

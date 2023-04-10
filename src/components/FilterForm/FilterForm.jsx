import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';

export const FilterForm = () => {
   const [filterText, setFilterText] = useState('');

   const dispatch = useDispatch();

   function onFilterInput(event) {
      dispatch(filterContacts(event.target.value));
      setFilterText(event.target.value);
   }

   return (
      <div>
         <label>
            Filter:{' '}
            <input type="text" name="filterForm" onChange={onFilterInput} value={filterText} />
         </label>
      </div>
   );
};

FilterForm.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};

import React from 'react';

const Filter = ({ currentFilter, onFilterChange }) => {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="filter-controls">
      {filters.map(filterName => (
        <button
          key={filterName}
          className={`filter-btn ${currentFilter.toLowerCase() === filterName.toLowerCase() ? 'active' : ''}`}
          onClick={() => onFilterChange(filterName.toUpperCase())}>
          {filterName}
        </button>
      ))}
    </div>
  );
};

export default Filter;
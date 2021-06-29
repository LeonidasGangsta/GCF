import React from 'react';
import { Link } from 'react-router-dom';
import { EnrolmentsResponse } from '../../types/types';
import './CourseCard.scss';

const CourseCard: React.FC<{ course: EnrolmentsResponse }> = ({ course }) => {
  const {
    id,
    name,
    description,
    status,
  } = course;

  return (
    <div className="course-card">
      <div className="course-card__title">
          {status === 'passed' ? (
            <Link to={`/course/${id}`} className="course-card__title__name course-card__title__name--passed">
              {name}
            </Link>
          ) : (
            <h2 className="course-card__title__name">
              {name}
            </h2>
          )}
        {status && (
          <span className={`course-card__title__status course-card__title__status--${status}`}>
            {status}
          </span>
        )}
      </div>
      {id !== 'NA' && (
        <span className="course-card__id">
          #{id}
        </span>
      )}
      <p className="course-card__description">
        {description}
      </p>
    </div>
  );
};

export default CourseCard;

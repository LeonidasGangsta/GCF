import React, { useEffect, useState } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import { EnrolmentsResponse } from '../../types/types';
import { getUserCoursesToEnrol, getUserEnrolments } from '../../api/users';
import { useUserContext } from '../../context/UserContext';
import './Home.scss';

const Home: React.FC = () => {
  const userData = useUserContext();
  const [coursesEnrolled, setCoursesEnrolled] = useState<EnrolmentsResponse[]>([])
  const [coursesToEnrol, setCoursesToEnrol] = useState<EnrolmentsResponse[]>([]);

  const {
    firstName,
    id,
  } = userData.user;

  const temporalCard: EnrolmentsResponse = {
    id: 'NA',
    name: 'More courses will be available soon',
    description: "Sit tight because we will be deploying more courses in the next weeks",
    status: '',
  };

  useEffect(() => {
    getUserEnrolments(id).then(setCoursesEnrolled);
    getUserCoursesToEnrol(id).then(setCoursesToEnrol);
  }, [id]);

  return (
    <div className="home">
      <span className="home__welcome-message">
        {`Welcome back ${firstName},`}
      </span>
      <div className="home__courses">
        <span className="home__courses__title">
          Your courses...
        </span>
        <div className="home__courses__course-list">
          {
            coursesEnrolled.map((course) => (
              <div key={course.id} className="home__courses__course-list__course">
                <CourseCard course={course} />
              </div>
            ))
          }
        </div>
      </div>
      <div className="home__courses">
        <span className="home__courses__title">
          Other courses...
        </span>
        <div className="home__courses__course-list">
          {
            coursesToEnrol.map((course) => (
              <div key={course.id} className="home__courses__course-list__course">
                <CourseCard course={course} />
              </div>
            ))
          }
          <div className="home__courses__course-list__course">
            <CourseCard course={temporalCard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

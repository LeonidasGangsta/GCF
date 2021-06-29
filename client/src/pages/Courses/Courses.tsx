import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getCoursePage } from 'src/api/courseApi';

const Courses: React.FC = () => {
  const { courseID } = useParams<{ courseID: string }>();

  const courseRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    getCoursePage(courseID).then((page: string) => {
      if (!courseRef?.current) return;
      
      console.log(page);
      const ref = courseRef.current;
      ref.innerHTML = page;
    })
  }, [courseID, courseRef]);
  
  return (
    <div className="course-content" ref={courseRef} />
  );
};

export default Courses;

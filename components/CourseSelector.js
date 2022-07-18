import React, { useState } from 'react'
import { View } from 'react-native'
import Course from './Course'

const CourseSelector = ({courses}) => {
  const [selected, setSelected] = useState([]);

  const toggle = course => setSelected(selected => (
    selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
  ));

  return (
    <View style={styles.courseList}>
      { 
        courses.map(course => (
          <Course key={course.id} course={course} 
            select={toggle}
            isSelected={selected.includes(course)}
          />
        ))
      }
    </View>
  );
};

export default CourseSelector;
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
  
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    
    return (
        <ScrollView>
            <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
            <CourseSelector courses={termCourses} />
        </ScrollView>
    );
  };

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring' };
const terms = Object.values(termMap);

const getCourseTerm = course => (
    termMap[course.id.charAt(0)]
);

export default CourseList;
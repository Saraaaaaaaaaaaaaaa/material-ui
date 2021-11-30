import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
// import colors from 'utils/global'

import MainChipComponent from 'components/Chip/MainChipComponent'
import SliderQuestion from 'components/Slider/SliderQuestion'
import MainSelectComponent from 'components/Select/MainSelectComponent'
import RadioButtonQuestion from 'components/RadioButton/RadioButtonQuestion'
import TextAreaQuestion from 'components/TextArea/TextAreaQuestion'
import MultipleSliderQuestion from 'components/Slider/MultipleSliderQuestion'
// import MainTextFieldComponent from 'components/TextField/MainTextFieldComponent'
// import ButtonComponent from 'components/ui/Button/ButtonComponent'

import './Questions.css'

const questions = [
  {
    id: 1,
    questionNumber: '1.',
    question: 'Which areas do you think you have the strongest/best skills?',
    subtitle: 'Select maximum 3 and minimum 1 option. If nothing applies, select \'Other\'.',
    component: MainChipComponent,
    config: [
      { key: 0, label: 'Quickly executing tasks', selected: false },
      { key: 1, label: 'Meticulous approach to implementation', selected: false },
      { key: 2, label: 'Looking up solutions online', selected: false },
      { key: 3, label: 'Writing documentation', selected: false },
      { key: 4, label: 'Multitasking', selected: false },
      { key: 5, label: 'Adapting to new technologies / tools', selected: false },
      { key: 6, label: 'Motivating others', selected: false },
      { key: 7, label: 'Optimizing code', selected: false },
      { key: 8, label: 'Other', selected: false }
    ]
  },
  {
    id: 2,
    questionNumber: '2.',
    question: 'How comfortable do you feel about approaching others for help with a problem?',
    subtitle: '0 - not at all, 10 - completely comfortable range: 0 - 10, increment 1 step',
    component: SliderQuestion,
    config: {
      defaultValue: null,
      step: 1,
      marks: [
        { value: 0, label: '0' },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10, label: '10' }],
      min: 0,
      max: 10
    }
  },
  {
    id: 3,
    questionNumber: '3.',
    question: 'Which colleagues do you most often go to for advice on a technical problem?',
    subtitle: 'Choose a minimum of 1 and up to 3 names from the list',
    component: MainSelectComponent,
    config: [
      { key: 1, name: 'Stojan Sljivic' },
      { key: 2, name: 'Milan Boricic' },
      { key: 3, name: 'Mihailo Jovkovic' },
      { key: 4, name: 'Nikola Maric' },
      { key: 5, name: 'Gavrilo Belasevic' },
      { key: 6, name: 'Slobodan Milicevic' },
      { key: 7, name: 'Pavle Ilic' },
      { key: 8, name: 'Dusan Milovic' },
      { key: 9, name: 'Nemanja Gajic' },
      { key: 10, name: 'Aleksandar Dimitrijevic' }
    ]
  },
  {
    id: 4,
    questionNumber: '4.',
    question: 'What is your preferred  working space?',
    component: RadioButtonQuestion,
    config: [
      { key: 1, space: 'Single-person office' },
      { key: 2, space: 'Small office, up to 4 people' },
      { key: 3, space: 'Medium office, up to 10 people' },
      { key: 4, space: 'Large open-office, up to 30 people' },
      { key: 5, space: 'Home office' }
    ]
  },
  {
    id: 5,
    questionNumber: '5.',
    question: 'What would you change about your current office environment?',
    component: TextAreaQuestion
  },
  {
    id: 6,
    questionNumber: '6.',
    question: 'How many hours a day do you spend in the following spaces:',
    component: MultipleSliderQuestion,
    config: [
      {
        key: 1,
        title: 'Office - common rooms',
        defaultValue: null,
        step: 1,
        marks: [
          { value: 1, label: '1' },
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 },
          { value: 6 },
          { value: 7 },
          { value: 8, label: '8' }
        ],
        min: 1,
        max: 8,
        name: 'commonRooms'
      },
      {
        key: 2,
        title: 'Office - at the desk',
        defaultValue: null,
        step: 1,
        marks: [
          { value: 1, label: '1' },
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 },
          { value: 6 },
          { value: 7 },
          { value: 8 },
          { value: 9 },
          { value: 10, label: '10' }
        ],
        min: 1,
        max: 10,
        name: 'atTheDesk'
      },
      {
        key: 3,
        title: 'Work Commute (minutes)',
        defaultValue: null,
        step: 5,
        marks: [
          { value: 10, label: '10' },
          { value: 15 },
          { value: 20 },
          { value: 25 },
          { value: 30 },
          { value: 35 },
          { value: 40 },
          { value: 45 },
          { value: 50 },
          { value: 55 },
          { value: 60 },
          { value: 65 },
          { value: 70 },
          { value: 75 },
          { value: 80 },
          { value: 85 },
          { value: 90 },
          { value: 95 },
          { value: 100, label: '100' }
        ],
        min: 10,
        max: 100,
        name: 'workCommute'
      }
    ]
  },
  {
    id: 7,
    questionNumber: '7.',
    question: 'Leave your contact info ',
    subtitle: 'all fields are required',
    component: MainSelectComponent // MainTextFieldComponent
  }
]

const Questions = () => {
  const methods = useForm()

  const onSubmit = (data) => { alert(JSON.stringify(data)) }

  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mainQuestionContainer">
          {
            questions?.map(question => {
              const Component = question.component

              return (
                <div key={question.id}>
                  <div className="titleContainer">
                    <div className="questionNumber">{question.questionNumber}</div>
                    <div className="questionContainer" >
                      <div className="title">{question.question}</div>
                      <div className="subtitle">{question.subtitle}</div>
                    </div>
                  </div>
                  <div>{<Component config={question.config} />}</div>
                </div>
              )
            })
          }
          <div className="buttonContainer">
            <button type="submit">Submit</button>
            {/* <ButtonComponent type="submit" text={'Potvrdi'} variant={'contained'} style={{ background: colors.pink, color: colors.white }}/> */}
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default Questions

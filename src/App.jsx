import React from 'react'
import { Route, Switch } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './components/Themes'
import GlobalStyle from './globalStyles/globalStyles'
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import WorkPage from './components/WorkPage'
import ProjectPage from './components/ProjectPage'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/project" component={ProjectPage} />
        </Switch>
      </ThemeProvider>
    </>
  )
}

export default App

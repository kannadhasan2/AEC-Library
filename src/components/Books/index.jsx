import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'
import Profile from '../Profile'
import BookDetails from '../BookDetails'
import './index.css'

const departmentFilterList = [
  {
    department: 'Computer Science & Engg.',
    departmentId: 'CSE',
  },
  {
    department: 'CSE - Cyber Security',
    departmentId: 'CSE&CS',
  },
  {
    department: 'Artificial Intelligence & DS',
    departmentId: 'AIDS',
  },
  {
    department: 'Artificial Intelligence & ML',
    departmentId: 'AIML',
  },
  {
    department: 'Information Technology',
    departmentId: 'IT',
  },
  {
    department: 'Electrical & Electronics Engg.',
    departmentId: 'EEE',
  },
  {
    department: 'Electronics & Communication Engg.',
    departmentId: 'ECE',
  },
  {
    department: 'Mechanical Engineering',
    departmentId: 'MECH',
  },
  {
    department: 'Civil Engineering',
    departmentId: 'CIVIL',
  },
  {
    department: 'Bio-Technology',
    departmentId: 'BIO',
  },
  {
    department: 'Chemical Engineering',
    departmentId: 'CHEM',
  },
  {
    department: 'Mechanical Engineering',
    departmentId: 'MECH',
  },
  
]

const bookData = [
  {
    bookId:1,
    bookName:"Linux Operating System",
    author:"Sam Griffin",
    noOfPages:98,
    Language:"English",
    publicationDate:"30-October-2020",
    description:"LINUXThe term Linux refers to an operating system, or kernel, developed by Linus Torvalds and a few other contributors. It was publicly released for the first time in September 1991 and its introduction completely changed how users would experience computing for personal and professional purposes.Linux has continued to grow in popularity over the years and is now widely used by individuals and businesses alike. This book will serve as a beginner's guide to Linux, and will explain everything you need to know about this exciting operating system!Here Is A Preview Of What You'll Learn About Inside...What Is LinuxThe History of LinuxFeatures Of LinuxLinux Command LineShell Scripting In LinuxThe Linux Boot ProcessMuch, Much More!",
    department:"CSE",
    publisher:"Ingram Publishing",
    bookCount:20,
    imageUrl:"https://res.cloudinary.com/dn6izpj6p/image/upload/v1728889271/linux_sciswz.jpg"
  },
  {
    bookId:2,
    bookName:"Intoduction to Recursive Programming",
    author:"Manuel Rubio-Sanchez",
    noOfPages:125,
    Language:"English",
    publicationDate:"21-September-2017",
    description:"Recursion is one of the most fundamental concepts in computer science and a key programming technique that allows computations to be carried out repeatedly. Despite the importance of recursion for algorithm design, most programming books do not cover the topic in detail, despite the fact that numerous computer programming professors and researchers in the field of computer science education agree that recursion is difficult for novice students. Introduction to Recursive Programming provides a detailed and comprehensive introduction to recursion. This text will serve as a useful guide for anyone who wants to learn how to think and program recursively, by analyzing a wide variety of computational problems of diverse difficulty.",
    department:"CSE",
    publisher:"CRC Press",
    bookCount:20,
    imageUrl:"https://res.cloudinary.com/dn6izpj6p/image/upload/v1728889542/recursive_qycemy.jpg"
  }
]

class Books extends Component {
  state = {
    searchInput1: '',
    searchInput: '',
    employmentType: [],
    packageValue: '',
    apiStatus: '',
    jobDetails: [],
  }
 

  getSearchInput = event => {
    this.setState({searchInput1: event.target.value})
  }

  checkBoxConst = (id, check) => {
    const {employmentType} = this.state
    if (check) {
      this.setState(
        prevState => ({
          employmentType: [...prevState.employmentType, id],
        }),
        this.getJobsDetails,
      )
    } else {
      const index = employmentType.indexOf(id)
      employmentType.splice(index, 1)
      this.setState({employmentType}, this.getJobsDetails)
    }
  }

  getSearchedList = () => {
    const {searchInput1} = this.state
    this.setState({searchInput: searchInput1}, this.getJobsDetails)
  }

  getSalary = event => {
    this.setState({packageValue: event.target.value}, this.getJobsDetails)
  }

  render() {
    const {searchInput1, apiStatus, jobDetails} = this.state
    return (
      <div className="jobs-container">
        <Navbar />
        <div className="jobs-filter-profile-container">
          <div className="profile">
            <Profile />
            <hr />
            <h1 className="tag-name">Departments</h1>
            <ul className="ul">
              {departmentFilterList.map(each => {
                const {departmentId} = each
                const check = event => {
                  this.checkBoxConst(event.target.value, event.target.checked)
                }
                return (
                  <li className="li-container" key={departmentId}>
                    <input
                      onChange={check}
                      name="check"
                      className="checkbox-input"
                      type="checkbox"
                      value={each.departmentId}
                      id={each.departmentId}
                    />
                    <label htmlFor={each.departmentId}>{each.department}</label>
                  </li>
                )
              })}
            </ul>
            
          </div>
          <div className="search-container">
            <div className='search-item-container'>
            <input className="search"
              type="search"
              placeholder='Search'
            />
            <button
              onClick={this.getSearchedList}
              className='search-button'
              type="button"
              data-testid="searchButton"
            >
              <BsSearch size={25} className="search-icon">
                1
              </BsSearch>
            </button>
            </div>
           
            {jobDetails.length === 0 &&
              apiStatus !== '' &&
              apiStatus == 'NULL' && (
                <div className="no-jobs">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
                    alt="no jobs"
                  />
                  <h1>No Books Found</h1>
                  <p>We could not find any Books. Try other filters.</p>
                </div>
              )}
           
            {apiStatus === 'NULL' && (
              <div className="loader-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
                  alt="failure view"
                />
                <h1>Oops! Something Went Wrong</h1>
                <p>We cannot seem to find the page you are looking for.</p>
                <button onClick={this.getJobsDetails} type="button">
                  Retry
                </button>
              </div>
            )}
            {
              bookData.length !== 0 && 
              <ul className='book-ul-container'>
                  {
                    bookData.map((eachBook) => <BookDetails book={eachBook} key={eachBook.bookId} />)
                  }
              </ul>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Books
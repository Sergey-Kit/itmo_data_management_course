```mermaid
    requirementDiagram

    functionalRequirement input_format_req {
    id: 1
    text: The service should accept resumes in PDF format.
    risk: high
    verifymethod: inspection
    }

    functionalRequirement field_recognition_req {
    id: 2
    text: The service should recognize: name, date of birth, phone, email, work experience, education.
    risk: high
    verifymethod: demonstration
    }

    functionalRequirement data_storage_req {
    id: 3
    text: The recognized fields should be saved in a database. Structured format.
    risk: medium
    verifymethod: test
    }

    performanceRequirement accuracy_req {
    id: 4
    text: The service should provide high accuracy in recognizing fields in the CV.
    risk: high
    verifymethod: demonstration
    }

    performanceRequirement scalability_req {
    id: 5
    text: The service should be scalable to process a large number of resumes in a short time.
    risk: medium
    verifymethod: test
    }

    performanceRequirement security_req {
    id: 6
    text: The data saved in the database should be protected from unauthorized access.
    risk: high
    verifymethod: inspection
    }

    performanceRequirement usability_req {
    id: 7
    text: The service should be easy to use for users. Provide a simple and intuitive interface.
    risk: low
    verifymethod: inspection
    }

    element CV_service {
    type: web app
    }

    element database {
    type: database
    }

    element cloud_technologies {
    type: cloud service provider
    }

    CV_service - satisfies -> input_format_req
    CV_service - satisfies -> field_recognition_req
    CV_service - satisfies -> data_storage_req
    CV_service - satisfies -> accuracy_req
    CV_service - satisfies -> security_req
    CV_service - satisfies -> scalability_req
    CV_service - satisfies -> usability_req

    field_recognition_req - derives -> data_storage_req

    data_storage_req - derives -> database

    scalability_req - derives -> cloud_technologies
```
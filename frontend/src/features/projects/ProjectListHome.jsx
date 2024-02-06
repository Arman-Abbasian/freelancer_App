import React from 'react'

function ProjectListHome({categoryTitle,title,createdAt,description,deadline,budget}) {
  return (
    <div>
            <p><strong>دسته بندی: </strong>{categoryTitle}</p>
            <p><strong>عنوان :</strong>{title}</p>
            <p><strong>تاریخ ایجاد: </strong>{toLocalDateShort(createdAt)}</p>
            <p><strong>توضیحات: </strong>{description}</p>
            <p><strong>تاریخ تحویل: </strong>{toLocalDateShort(deadline)}</p>
            <p><strong>بودجه: </strong>{toPersianNumbersWithComma(budget)}</p>
            </div>
  )
}

export default ProjectListHome
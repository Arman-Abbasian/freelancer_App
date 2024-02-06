import React from 'react'
import toLocalDateShort from '../../utils/toLocalDateShort'
import { toPersianNumbersWithComma } from '../../utils/toPersianNumbers'

function ProjectListHome({ categoryTitle, title, createdAt, description, deadline, budget }) {
    return (
        <div className='space-y-2 shadow-xl bg-secondary-200 backdrop-blur-sm p-3 rounded-lg shadow-secondary-80'>
            <p><strong>دسته بندی: </strong>{categoryTitle}</p>
            <p><strong>عنوان: </strong>{title}</p>
            <p><strong>توضیحات: </strong>{description}</p>
            <p><strong>تاریخ ایجاد: </strong>{toLocalDateShort(createdAt)}</p>
            <p><strong>تاریخ تحویل: </strong>{toLocalDateShort(deadline)}</p>
            <p><strong>بودجه: </strong>{toPersianNumbersWithComma(budget)}</p>
        </div>
    )
}

export default ProjectListHome
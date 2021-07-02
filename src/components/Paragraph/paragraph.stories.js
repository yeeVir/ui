import React from 'react'
import Paragraph from '.'

export default {
    title: '排版/Paragraph',
    component: Paragraph,
}

export const Default = () => (
    <>
        <Paragraph>
            这是一个段落
        </Paragraph>
        <Paragraph>
            这是一个段落
        </Paragraph>
    </>
)

export const Ellipsis = () => (
    <Paragraph>
        这是一个段落这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
        这是一个段落 这是一个段落
    </Paragraph>
)

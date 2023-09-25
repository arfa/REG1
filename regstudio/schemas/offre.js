import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offre',
  title: 'Offre',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Title',
      type: 'string',
    }),
   
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    defineField({
        name: 'level',
      title: 'Job position',
      type: 'string',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    defineField({
        title: 'PDF File',
        name: 'pdffile',
        type: 'file',
        
        
      }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'role',
      author: 'author.name',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})

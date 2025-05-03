import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './NewsletterEditor.css'; // Assuming you have some CSS for the editor
const NewsletterEditor = ({ content, onUpdate }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || '',
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  return (
    <div className="editor">
      <EditorContent editor={editor} />
    </div>
  );
};

export default NewsletterEditor;

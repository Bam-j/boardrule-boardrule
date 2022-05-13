import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const TagItem = React.memo(({ tag, onRemove, onChangeTags }) => <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>);
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags && tags.map(tag => <TagItem key={tag} tag={tag} onRemove={onRemove} />)}
  </TagListBlock>
));

const TagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(tag => {
    if (!tag) return;
    if (localTags.includes(tag)) return;

    const nextTags = [...localTags, tag];

    setLocalTags(nextTags);
    onChangeTags(nextTags);
  }, [localTags, onChangeTags]);

  const onRemove = useCallback(tag => {
    const nextTags = localTags.filter(t => t !== tag);

    setLocalTags(nextTags);
    onChangeTags(nextTags);
  }, [localTags, onChangeTags]);

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    insertTag(input.trim());
    setInput('');
  }, [input, insertTag]);

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagInputBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input placeholder={'태그를 입력하세요.'} value={input} onChange={onChange} />
        <button type={'submit'}><AiOutlinePlus /></button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagInputBlock>
  );
};

{/* TODO 태그입력란 꾸미기 */
}
const TagInputBlock = styled.div`
  width: 100%;
  border-top: 1px solid #e9ecef;
  padding-top: 2rem;

  h4 {
    color: #343a40;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid #212529;

  input, button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    border: none;
    background: #343a40;
    color: #ffffff;
    font-weight: bold;

    &:hover {
      background: #868e96;
    }
  }
`;

const Tag = styled.div`
  cursor: pointer;
  margin-right: 0.5rem;
  color: #868e96;

  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export default TagBox;
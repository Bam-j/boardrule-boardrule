import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const TagItem = React.memo(({ tag, onRemove }) => <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>);
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map(tag => <TagItem key={tag} tag={tag} onRemove={onRemove} />)}
  </TagListBlock>
));

const TagInput = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);
  const insertTag = useCallback(tag => {
    if (!tag) return;
    if (localTags.includes(tag)) return;

    setLocalTags([...localTags, tag]);
  }, [localTags]);
  const onRemove = useCallback(tag => {
    setLocalTags(localTags.filter(t => t !== tag));
  }, [localTags]);
  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);
  const onSubmit = useCallback(e => {
    e.preventDefault();
    insertTag(input.trim());
    setInput('');
  }, [input, insertTag]);

  return (
    <TagInputBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input placeholder={'태그를 입력하세요.'} value={input} onChange={onChange} />
        <button type={'submit'}>추가</button>
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

export default TagInput;
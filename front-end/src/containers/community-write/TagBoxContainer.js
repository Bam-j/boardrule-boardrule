import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../modules/write';
import TagBox from '../../components/community/write/TagBox';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.write.tags);
  const onChangeTags = nextTags => {
    dispatch(changeField({
        key: 'tags',
        value: nextTags,
      }),
    );
  };

  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default TagBoxContainer;
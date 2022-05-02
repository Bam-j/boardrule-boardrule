import mongoose, {Schema} from 'mongoose';

const RuleSchema = new Schema({
    title: String,
    body: String,
    tags: [String]
});

const Rule = mongoose.model('Rule', RuleSchema);

export default Rule;

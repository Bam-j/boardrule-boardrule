import client from './client';

export const readRule = id => client.get(`/api/rule/${id}`);
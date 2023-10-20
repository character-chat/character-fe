# -*- coding: utf-8 -*-
from sentence_transformers import SentenceTransformer
import numpy as np
import openai
import re
from nltk.tokenize import sent_tokenize
import nltk
nltk.download('punkt')
nltk.download('stopwords')
import os
os.environ["TOKENIZERS_PARALLELISM"] = "false"
import re

class ChatPaper:
    def __init__(self, content):
        self.paragraphs = self.extract_paragraphs(content)
        self.model = SentenceTransformer('all-MiniLM-L6-v2')

    def extract_paragraphs(self, content):
        paragraphs = re.findall(r'.{1,800}', content)
        return paragraphs

    # def find_relevant_paragraphs(self, question, max_tokens=750):
    #     question_embedding = self.model.encode(question)
    #     paragraph_embeddings = self.model.encode(self.paragraphs)

    #     distances = np.linalg.norm(paragraph_embeddings - question_embedding, axis=1)
    #     sorted_indices = np.argsort(distances)

    #     print('sroted::::::',sorted_indices)

    #     relevant_paragraphs = []
    #     total_tokens = 0
    #     for index in sorted_indices:
    #         paragraph = self.paragraphs[index]
    #         paragraph_tokens = len(paragraph.split())
    #         if total_tokens + paragraph_tokens > max_tokens:
    #             sentences = sent_tokenize(paragraph)
    #             for sentence in sentences:
    #                 sentence_tokens = len(sentence.split())
    #                 if total_tokens + sentence_tokens <= max_tokens:
    #                     relevant_paragraphs.append(sentence)
    #                     total_tokens += sentence_tokens
    #             continue
    #         relevant_paragraphs.append(paragraph)
    #         total_tokens += paragraph_tokens
    #         if total_tokens >= max_tokens:
    #             break
    #     return relevant_paragraphs

    def find_relevant_sentences(self, question):
        # 1. 将段落分割为句子
        all_sentences = []
        for paragraph in self.paragraphs:
            sentences = sent_tokenize(paragraph)
            all_sentences.extend(sentences)
        # 2. 对每个句子进行编码
        sentences_embeddings = self.model.encode(all_sentences)
        question_embedding = self.model.encode(question)
        # 3. 根据与问题的相似性对句子进行排序
        distances = np.linalg.norm(sentences_embeddings - question_embedding, axis=1)
        sorted_indices = np.argsort(distances)
        # 4. 将排序后的句子连接为一个完整的字符串
        sorted_sentences = [all_sentences[i] for i in sorted_indices]
        relevant_content = ' '.join(sorted_sentences)
        return relevant_content

    def ask_chatgpt(self, question, relevant_paragraphs, max_tokens=4000):
        relevant_string = ''.join(relevant_paragraphs)
        input_prompt = "Please find the answer of question: '{}' based on the following content: {}".format(question, relevant_string)

        tokens = re.findall(r'[\u4e00-\u9fff]|[a-zA-Z0-9]+|[^a-zA-Z0-9\u4e00-\u9fff]|[\s]', input_prompt)
        results = ''.join(tokens[:max_tokens])
        print(results)

        openai.api_key = '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'
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": results}
            ]
        )
        return response['choices'][0]['message']['content']

    def ask_question(self, question):
        relevant_paragraphs = self.find_relevant_sentences(question)
        print(relevant_paragraphs)
        return self.ask_chatgpt(question, relevant_paragraphs)


def main(content,question):
    chat_paper = ChatPaper(content)
    answer = chat_paper.ask_question(question)
    return answer

if __name__ == "__main__":
    main()
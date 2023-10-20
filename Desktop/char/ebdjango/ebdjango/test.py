import re

def tokenize_content(content, max_tokens):
    # 使用正则表达式匹配中文、英文单词、标点符号和空格
    tokens = re.findall(r'[\u4e00-\u9fff]|[a-zA-Z0-9]+|[^a-zA-Z0-9\u4e00-\u9fff]|[\s]', content)

    # 如果token数量超过max_tokens则截取
    return tokens[:max_tokens]

content = "这是一个mixed language的句子，里面包含了中文和English。请确保截断后的内容不超过API的token限制。"
max_tokens = 12

result = tokenize_content(content, max_tokens)
print(result)

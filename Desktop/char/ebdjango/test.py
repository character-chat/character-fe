import matplotlib.pyplot as plt

# 数据
labels = ['Correct', 'Incorrect']
sizes = [90, 10]
colors = ['green', 'red']

# 创建饼图
fig, ax = plt.subplots()
ax.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90, wedgeprops=dict(width=0.3))
ax.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

# 添加标题
plt.title("System performance on QA task")

# 显示图表
plt.show()

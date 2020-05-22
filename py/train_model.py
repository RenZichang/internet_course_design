from tensorflow.keras.layers import Dense,Dropout
from tensorflow.keras.models import Sequential
from tensorflow.keras import optimizers
from sklearn import metrics
import numpy as np
import pandas as pd

feature_num = 3

model = Sequential()
#实验中经过特征筛选后剩余的特征维度是6维
model.add(Dense(2*feature_num, activation = 'relu'))
model.add(Dropout(0.2))
# 隐藏层64个神经元
model.add(Dense(64, activation = 'relu'))
model.add(Dense(128, activation = 'relu'))
model.add(Dropout(0.2))
# 输出层4个神经元
model.add(Dense(4, activation = 'sigmoid'))
# 梯度下降法优化
model.compile(optimizer = optimizers.Adam(lr = 0.006),
loss = 'binary_crossentropy',
metrics = ['accuracy'])
# 读入数据开始训练
train_data = pd.read_csv('./feature_train.csv')
# 标签
train_data_y = train_data.iloc[:,-4:].values
#除去标签的所有列就是特征
train_data_x = train_data.iloc[:,:-4].values
model.fit(train_data_x, train_data_y, nb_epoch = 1000, batch_size = 256)
# 保存在model文件夹下的cwru.h5文件中
model.save('./cwru.h5')

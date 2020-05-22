# 第20组互联网课设——轴承损坏概率显示

## 项目概述

对于轴承以及机组的监控人员来说，最重要的是首先了解到整体机组的大概情况，这样便于进行整体分析，掌握最基本的信息。 在得到机组的整体情况之后，机组人员应该可以获得每一个机组、轴承的细节。在这里就涉及到一个问题，那就是如果模型只是简单地输出一个标签，而不给出具体的各项趋势，那么工作人员得到的信息量将会很少。假设这样一种情况：某一机组某一轴承的外环和内芯都产生了故障，又或者外环产生了故障，导致内芯有发生故障的趋势。由于模型只能根据已有数据得到一个标签，工作人员只能简单地将此故障定性为外环故障，而不知道内芯发生了什么问题。如果可以将模型判断时内部产生的细节都进行直观的展示，系统整体的鲁棒性将得到极大的提升。.

## 目录结构

1. 总共有两个文件夹wx、py和一个readme.md文件

2. 文件夹py中存放的是平日里进行模型构建与测试时的代码，后面提交的作业里，就是这些内容。注意，微信小程序的服务器部署内容不是这些文件！

>py文件夹下的feature_train.py和feature_test.py，分别是提取训练集与测试集的特征
前者将所有的测试集数据文件全部提取，总共6个特征，然后在每一行的最后加上标签。（因为标签已知，所以可以集中处理）
后者则是给定测试集中某一数据文件的名字，然后对其进行特征提取，最后一列没有标签。（因为标签未知，所以要进行分开处理）

>test_model.py和train_model.py分别对模型进行训练与测试，不必多言。

3. 文件夹wx中存放的是微信小程序项目中，在服务器端部署的内容。

>feature.py文件，传入文件名，对其进行特征提取，生成特征提取后的文件。

>test_model.py跟py文件夹下的同名文件差不多，只是多了几步读取命令行参数的步骤。

>test_model_type.py输出的不是标签，而是某一类别的概率（就是四分类向量某一维度上的值）。

## 版本管理

目前为第一代版本，下一版本将在模型的综合评分上进行优化

## 依赖配置

下面是我的python3本地运行环境（输入pip freeze后列出的第三方包）  
代码用到了pandas、numpy、scipy、tensorflow、sklearn（即scikit-learn）  
absl-py==0.9.0  
asn1crypto==1.3.0  
astor==0.8.0  
astroid==2.3.3  
backcall==0.1.0  
blinker==1.4  
cachetools==3.1.1  
certifi==2019.11.28    
cffi==1.14.0  
chardet==3.0.4  
Click==7.0  
colorama==0.4.3  
cryptography==2.8  
cycler==0.10.0  
decorator==4.4.2  
entrypoints==0.3  
gast==0.2.2  
google-auth==1.11.2  
google-auth-oauthlib==0.4.1  
google-pasta==0.1.8  
grpcio==1.27.2  
h5py==2.10.0  
idna==2.8  
ipykernel==5.1.4  
ipython==7.13.0  
ipython-genutils==0.2.0  
isort==4.3.21  
jedi==0.16.0  
joblib==0.14.1  
jupyter-client==6.1.0  
jupyter-core==4.6.1  
Keras==2.3.1  
Keras-Applications==1.0.8  
Keras-Preprocessing==1.1.0  
kiwisolver==1.1.0  
lazy-object-proxy==1.4.3  
lightgbm==2.3.0  
Markdown==3.1.1  
matplotlib==3.1.3  
mccabe==0.6.1  
mkl-fft==1.0.15  
mkl-random==1.1.0  
mkl-service==2.3.0  
numpy==1.18.1  
oauthlib==3.1.0  
opt-einsum==3.1.0  
pandas==1.0.1  
parso==0.6.2  
pickleshare==0.7.5  
prompt-toolkit==3.0.4  
protobuf==3.11.4  
pyasn1==0.4.8  
pyasn1-modules==0.2.7  
pycparser==2.19  
Pygments==2.6.1  
PyJWT==1.7.1  
pylint==2.4.4  
pyOpenSSL==19.1.0  
pyparsing==2.4.6  
pyreadline==2.1  
PySocks==1.7.1  
python-dateutil==2.8.1  
pytz==2019.3  
pywin32==227  
PyYAML==5.3  
pyzmq==18.1.1  
requests==2.23.0  
requests-oauthlib==1.3.0  
rsa==4.0  
scikit-learn==0.22.1  
scipy==1.4.1  
six==1.14.0  
tensorboard==2.1.0  
tensorflow==2.1.0  
tensorflow-estimator==2.1.0  
termcolor==1.1.0  
tornado==6.0.4  
traitlets==4.3.3  
typed-ast==1.4.1  
urllib3==1.25.8  
wcwidth==0.1.8  
Werkzeug==0.14.1  
win-inet-pton==1.1.0  
wincertstore==0.2  
wrapt==1.11.2

微信开发者工具的版本为1.03.2005141  

## 部署说明

无

## 运行说明

微信小程序不必多说……py文件夹下的话：

下面是代码运行的详细过程
1. 所有代码的 输 出 结果都是在当前文件夹下直接输出，注意python运行环境一定要设置为当前文件夹（如果各个文件的位置都没有动过，那么默认路径应该就是 blabla/第二十组/code ）
2. 在当前文件夹下建立两个数据文件夹，训练集文件夹名为train，测试集文件夹名为cwru，两个文件夹下面直接放入相应的B01.csv、TEST1.csv等文件即可（注意不要放其他无关文件）
3. 分别运行feature_train.py、feature_test.py以及train_model.py、test_model.py，即可得到result.csv
4. 因为feature_train.py和train_model.py只是为了训练并生成模型文件cwru.h5，所以，也可以将压缩包中的cwru.h5复制到当前目录后，只运行feature_test.py以及test_model.py，同样可以得到result.csv

## 注意事项

小心爆炸（#逃）

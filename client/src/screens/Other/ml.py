import pandas as pd 
import numpy as np


# Importing files of food items.
df1=pd.read_csv('../../../../data.csv')
df1.columns = ['food_id','title','canteen_id','price', 'num_orders', 'category', 'avg_rating', 'num_rating', 'tags']
print(df1)
# mean of average ratings of all items
C= df1['avg_rating'].mean()

# the minimum number of votes required to appear in recommendation list, i.e, 60th percentile among 'num_rating'
m= df1['num_rating'].quantile(0.6)
# items that qualify the criteria of minimum num of votes
q_items = df1.copy().loc[df1['num_rating'] >= m]

# Calculation of weighted rating based on the IMDB formula
def weighted_rating(x, m=m, C=C):
    v = x['num_rating']
    R = x['avg_rating']
    return (v/(v+m) * R) + (m/(m+v) * C)

# Applying weighted_rating to qualified items
q_items['score'] = q_items.apply(weighted_rating, axis=1)

# Shortlisting the top rated items and popular items
top_rated_items = q_items.sort_values('score', ascending=False)
#print(top_rated_items)
pop_items= df1.sort_values('num_orders', ascending=False)
top_rated_items[['title', 'num_rating', 'avg_rating', 'score']].to_csv('output.csv', index=False)
top_rated_items[['title', 'num_rating', 'avg_rating', 'score']].head()
# Importing files of food items.
#print(top_rated_items[['title', 'num_rating', 'avg_rating', 'score']])
#df1=pd.read_csv('./food.csv')
#df1.columns = ['food_id','title','canteen_id','price', 'num_orders', 'category', 'avg_rating', 'num_rating', 'tags']
df2 = pd.read_csv('./data.csv')
#a= pd.read_csv("data.csv")
#df1.to_html("output.html")
#print(df1)

# write DataFrame to JSON file
top_rated_items[['title', 'num_rating', 'avg_rating', 'score']].to_json('data.json', orient='records')

# read JSON file and write as JavaScript file
with open('data.json', 'r') as f:
    data = f.read()

with open('data.js', 'w') as f:
    
    f.write(f'const data = {data};\n export default data;')

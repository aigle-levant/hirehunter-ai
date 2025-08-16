# modules
import spacy # nlp lesgooo
from collections import Counter # we're gonna count

nlp = spacy.load("en_core_web_sm")

# get the top 10 keywords from jd

def extract_keywords_from_jd(jd: str, top_n_keywords: int = 10):
    doc = nlp(jd.lower())
    words = []
    for token in doc:
        if token.pos_ in ["NOUN", "PROPN"] and len(token.text) > 2:
            words.append(token.text)
    freq = Counter(words)
    return [word for word, count in freq.most_common(top_n_keywords)]
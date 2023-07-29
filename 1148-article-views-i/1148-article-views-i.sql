SELECT DISTINCT author_id 
AS id    # means ALIAS

FROM Views 
where author_id = viewer_id 
ORDER BY id
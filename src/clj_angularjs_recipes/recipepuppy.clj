(ns clj-angularjs-recipes.recipepuppy
  (:require [clj-http.client :as http]))

(def API "http://www.recipepuppy.com/api/")
(def weatherAPI "http://api.wunderground.com/api/0c726a57890f57e6/conditions/q/autoip.json")

(defn search-recipes
  [query page]
  (let [response (http/get API {:query-params {:q query :p page} :as :json})]
    ((response :body) :results)))
                           
(defn get-recipes
  [query num-pages]
  (loop [page 1 recipes []]
    (if (> page num-pages)
      recipes
      (recur (inc page) (into recipes (search-recipes query page))))))

(defn get-weather
	[]
  ((http/get weatherAPI) :body))
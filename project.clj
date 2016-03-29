(require '[clojure.java.shell :refer [sh]])

(def +version+
  "Get the version number from git"
  (-> (sh "git" "describe" "--tags" "--always") :out clojure.string/trim))

(defproject bitauth-cljs +version+
  :description "ClojureScript Wrapper around BitPay's BitAuth"
  :url "https://github.com/xcthulhu/bitauth-cljs"
  :license {:name "MIT"
            :url "https://opensource.org/licenses/MIT"})
